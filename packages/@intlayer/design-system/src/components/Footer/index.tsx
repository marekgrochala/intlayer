import type { FC } from 'react';
import tw from 'twin.macro';
import { Button } from '../Button';
import { Logo } from '../Logo';

type Link = {
  href: string;
  text: string;
  onClick?: () => void;
  label: string;
};

export type LinkGroup = { title: string; links: Link[] };

type FooterProps = { links?: LinkGroup[] };

const StyledFooter = tw.footer`flex flex-auto flex-row justify-around p-6 items-center`;

const StyledAsideContent = tw.aside`flex flex-col justify-between items-center w-1/3`;
const StyledAsideDescription = tw.span`text-sm text-neutral text-center`;

const StyledFooterContent = tw.div`w-full flex flex-row justify-around m-auto`;
const StyledColumn = tw.div`flex flex-col gap-2`;
const StyledColumnRow = tw.div`flex flex-col gap-3`;

export const Footer: FC<FooterProps> = ({ links }) => (
  <StyledFooter>
    <StyledAsideContent>
      <Logo type="logoWithTextBelow" width={100} height={100} />
      <StyledAsideDescription>© 2024 Intlayer, Inc.</StyledAsideDescription>
    </StyledAsideContent>
    <StyledFooterContent>
      {(links ?? []).map(({ title, links }) => (
        <StyledColumn key={title}>
          <h3>{title}</h3>
          <StyledColumnRow>
            {links.map((link) => (
              <Button
                variant="link"
                color="neutral"
                size="sm"
                key={link.href}
                onClick={link.onClick}
                label={link.label}
              >
                {link.text}
              </Button>
            ))}
          </StyledColumnRow>
        </StyledColumn>
      ))}
    </StyledFooterContent>
  </StyledFooter>
);