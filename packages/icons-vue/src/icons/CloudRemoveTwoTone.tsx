// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudRemoveTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudRemoveTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudRemoveTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudRemoveTwoTone: CloudRemoveTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudRemoveTwoToneSvg}></AntdIcon>;
};

CloudRemoveTwoTone.displayName = 'CloudRemoveTwoTone';
CloudRemoveTwoTone.inheritAttrs = false;
export default CloudRemoveTwoTone;