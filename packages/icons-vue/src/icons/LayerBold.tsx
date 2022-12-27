// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LayerBoldSvg from '@ant-design/icons-svg/lib/asn/LayerBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LayerBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LayerBold: LayerBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayerBoldSvg}></AntdIcon>;
};

LayerBold.displayName = 'LayerBold';
LayerBold.inheritAttrs = false;
export default LayerBold;