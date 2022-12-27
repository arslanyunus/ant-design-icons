// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityCardTwoToneSvg from '@ant-design/icons-svg/lib/asn/SecurityCardTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityCardTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityCardTwoTone: SecurityCardTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityCardTwoToneSvg}></AntdIcon>;
};

SecurityCardTwoTone.displayName = 'SecurityCardTwoTone';
SecurityCardTwoTone.inheritAttrs = false;
export default SecurityCardTwoTone;