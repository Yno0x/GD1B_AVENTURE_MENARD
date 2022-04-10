<?xml version="1.0" encoding="UTF-8"?>
<tileset version="1.5" tiledversion="1.7.2" name="zone test" tilewidth="32" tileheight="32" tilecount="10000" columns="100">
 <image source="zonetest.png" width="3200" height="3200"/>
 <tile id="0">
  <properties>
   <property name="collides" type="bool" value="false"/>
  </properties>
 </tile>
 <tile id="1">
  <properties>
   <property name="collides" type="bool" value="false"/>
  </properties>
 </tile>
 <tile id="2">
  <properties>
   <property name="collides" type="bool" value="false"/>
  </properties>
 </tile>
 <tile id="3">
  <properties>
   <property name="collides" type="bool" value="true"/>
  </properties>
  <objectgroup draworder="index" id="3">
   <object id="3" x="0" y="0" width="32" height="32"/>
  </objectgroup>
 </tile>
</tileset>
