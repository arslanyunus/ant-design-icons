// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import CloudAddTwoToneSvg from '@ant-design/icons-svg/lib/asn/CloudAddTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface CloudAddTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const CloudAddTwoTone: CloudAddTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={CloudAddTwoToneSvg}></AntdIcon>;
};

CloudAddTwoTone.displayName = 'CloudAddTwoTone';
CloudAddTwoTone.inheritAttrs = false;
export default CloudAddTwoTone;