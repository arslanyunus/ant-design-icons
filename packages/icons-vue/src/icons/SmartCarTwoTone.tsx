// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import SmartCarTwoToneSvg from '@ant-design/icons-svg/lib/asn/SmartCarTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface SmartCarTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const SmartCarTwoTone: SmartCarTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={SmartCarTwoToneSvg}></AntdIcon>;
};

SmartCarTwoTone.displayName = 'SmartCarTwoTone';
SmartCarTwoTone.inheritAttrs = false;
export default SmartCarTwoTone;