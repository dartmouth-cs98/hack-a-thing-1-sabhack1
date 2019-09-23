counties = open('counties-raw.tsv', 'r+w')
newfile = open('counties.tsv', 'w+')

for line in counties.readlines():
  line = line.replace('\s', '\t')
  if (line[0] == '0'):
    line = line[1:]
  newfile.write(line)

counties.close()
