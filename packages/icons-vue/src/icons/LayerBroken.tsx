// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LayerBrokenSvg from '@ant-design/icons-svg/lib/asn/LayerBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LayerBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LayerBroken: LayerBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayerBrokenSvg}></AntdIcon>;
};

LayerBroken.displayName = 'LayerBroken';
LayerBroken.inheritAttrs = false;
export default LayerBroken;