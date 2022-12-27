// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudNotifLinearSvg from '@ant-design/icons-svg/lib/asn/CloudNotifLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudNotifLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudNotifLinear: CloudNotifLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudNotifLinearSvg}></AntdIcon>;
};

CloudNotifLinear.displayName = 'CloudNotifLinear';
CloudNotifLinear.inheritAttrs = false;
export default CloudNotifLinear;