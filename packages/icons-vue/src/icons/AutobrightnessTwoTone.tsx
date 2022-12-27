// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AutobrightnessTwoToneSvg from '@ant-design/icons-svg/lib/asn/AutobrightnessTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AutobrightnessTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AutobrightnessTwoTone: AutobrightnessTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AutobrightnessTwoToneSvg}></AntdIcon>;
};

AutobrightnessTwoTone.displayName = 'AutobrightnessTwoTone';
AutobrightnessTwoTone.inheritAttrs = false;
export default AutobrightnessTwoTone;