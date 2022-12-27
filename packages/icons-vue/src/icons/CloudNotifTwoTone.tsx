// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudNotifTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudNotifTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudNotifTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudNotifTwoTone: CloudNotifTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudNotifTwoToneSvg}></AntdIcon>;
};

CloudNotifTwoTone.displayName = 'CloudNotifTwoTone';
CloudNotifTwoTone.inheritAttrs = false;
export default CloudNotifTwoTone;