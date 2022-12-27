// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudChangeTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudChangeTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudChangeTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudChangeTwoTone: CloudChangeTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudChangeTwoToneSvg}></AntdIcon>;
};

CloudChangeTwoTone.displayName = 'CloudChangeTwoTone';
CloudChangeTwoTone.inheritAttrs = false;
export default CloudChangeTwoTone;