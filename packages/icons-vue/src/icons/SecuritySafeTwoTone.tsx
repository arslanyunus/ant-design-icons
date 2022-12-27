// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecuritySafeTwoToneSvg from '@ant-design/icons-svg/lib/asn/SecuritySafeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecuritySafeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecuritySafeTwoTone: SecuritySafeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecuritySafeTwoToneSvg}></AntdIcon>;
};

SecuritySafeTwoTone.displayName = 'SecuritySafeTwoTone';
SecuritySafeTwoTone.inheritAttrs = false;
export default SecuritySafeTwoTone;