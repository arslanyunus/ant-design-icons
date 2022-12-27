// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityTimeOutlineSvg from '@ant-design/icons-svg/lib/asn/SecurityTimeOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityTimeOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityTimeOutline: SecurityTimeOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityTimeOutlineSvg}></AntdIcon>;
};

SecurityTimeOutline.displayName = 'SecurityTimeOutline';
SecurityTimeOutline.inheritAttrs = false;
export default SecurityTimeOutline;