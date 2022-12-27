// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudNotifOutlineSvg from '@ant-design/icons-svg/lib/asn/CloudNotifOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudNotifOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudNotifOutline: CloudNotifOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudNotifOutlineSvg}></AntdIcon>;
};

CloudNotifOutline.displayName = 'CloudNotifOutline';
CloudNotifOutline.inheritAttrs = false;
export default CloudNotifOutline;