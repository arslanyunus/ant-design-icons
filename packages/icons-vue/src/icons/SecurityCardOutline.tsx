// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SecurityCardOutlineSvg from '@ant-design/icons-svg/lib/asn/SecurityCardOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SecurityCardOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SecurityCardOutline: SecurityCardOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SecurityCardOutlineSvg}></AntdIcon>;
};

SecurityCardOutline.displayName = 'SecurityCardOutline';
SecurityCardOutline.inheritAttrs = false;
export default SecurityCardOutline;