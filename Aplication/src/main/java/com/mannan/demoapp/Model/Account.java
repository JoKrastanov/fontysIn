package com.mannan.demoapp.Model;

import java.util.List;

public class Account {

    private long id;
    private int pcn;
    private String email;
    private String password;
    private String academicType;
    private String bio;
    private List<Account> connections;
    //private Portfolio portfolio;
    //private List<Post> posts;

    public Account(){

    }


    public long getId() { return this.id;}

    public void setId(long id) {this.id=id;}

    public int getPcn() { return this.pcn;}

    public void setPcn(int pcn) {this.pcn=pcn;}

    public String getEmail() { return this.email;}

    public void setEmail(String email) {this.email=email;}

    public String getPassword() { return this.password;}

    public void setPassword(String password) {this.password=password;}

    public String getAcademicType() { return this.academicType;}

    public void setAcademicType(String academicType) {this.academicType=academicType;}

    public String getBio() { return this.bio;}

    public void setBio(String bio) {this.bio=bio;}

    public List<Account> getConnections() { return this.connections;}

    public void setConnections(List<Account> connections) {this.connections=connections;}




}
