// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LayerTwoToneSvg from '@ant-design/icons-svg/lib/asn/LayerTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LayerTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LayerTwoTone: LayerTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayerTwoToneSvg}></AntdIcon>;
};

LayerTwoTone.displayName = 'LayerTwoTone';
LayerTwoTone.inheritAttrs = false;
export default LayerTwoTone;