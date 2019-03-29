from BeautifulSoup import BeautifulSoup
import urllib2
import re
import requests 
# fetch hyper links in the given url
def getLinks(url):
    html_page = urllib2.urlopen(url)
    soup = BeautifulSoup(html_page)
    links = []
 
    for link in soup.findAll('a', attrs={'href': re.compile("^http://")}):
        links.append(link.get('href'))
 
    return links

def downloadLinks(links):
    for link in links:
        if "xlsx" in link:
            print(link)
            file_name = link.split('/')[-1]    
            print "Downloading file:%s"%file_name
            r = requests.get(link) # create HTTP response object 
            with open(file_name,'wb') as f: 
                f.write(r.content) 
            #print(link)


downloadLinks(getLinks("https://www.rbi.org.in/scripts/bs_viewcontent.aspx?Id=2009"))
print(len(getLinks("https://www.rbi.org.in/scripts/bs_viewcontent.aspx?Id=2009")))
 
#print( getLinks("https://www.rbi.org.in/scripts/bs_viewcontent.aspx?Id=2009") )
