// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudNotifBrokenSvg from '@ant-design/icons-svg/lib/asn/CloudNotifBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudNotifBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudNotifBroken: CloudNotifBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudNotifBrokenSvg}></AntdIcon>;
};

CloudNotifBroken.displayName = 'CloudNotifBroken';
CloudNotifBroken.inheritAttrs = false;
export default CloudNotifBroken;