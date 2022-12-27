// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AutobrightnessBoldSvg from '@ant-design/icons-svg/lib/asn/AutobrightnessBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AutobrightnessBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AutobrightnessBold: AutobrightnessBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AutobrightnessBoldSvg}></AntdIcon>;
};

AutobrightnessBold.displayName = 'AutobrightnessBold';
AutobrightnessBold.inheritAttrs = false;
export default AutobrightnessBold;