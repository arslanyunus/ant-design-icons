// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityTwoToneSvg from '@ant-design/icons-svg/lib/asn/SecurityTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityTwoTone: SecurityTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityTwoToneSvg}></AntdIcon>;
};

SecurityTwoTone.displayName = 'SecurityTwoTone';
SecurityTwoTone.inheritAttrs = false;
export default SecurityTwoTone;