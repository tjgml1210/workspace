package com.kh.mybatis.member.model.dao;

import org.apache.ibatis.session.SqlSession;

import com.kh.mybatis.member.model.vo.Member;

public class MemberDao {
	public Member loginMember(SqlSession sqlSession, Member m) {
		//select -> Member조회 -> ResultSet객체
		
		return sqlSession.selectOne("memberMapper.loginMember", m);
	}

	public int insertMember(SqlSession sqlSession, Member m) {
		return sqlSession.insert("memberMapper.insertMember", m);
	}
}
