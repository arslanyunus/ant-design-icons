// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudNotifBoldSvg from '@ant-design/icons-svg/lib/asn/CloudNotifBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudNotifBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudNotifBold: CloudNotifBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudNotifBoldSvg}></AntdIcon>;
};

CloudNotifBold.displayName = 'CloudNotifBold';
CloudNotifBold.inheritAttrs = false;
export default CloudNotifBold;