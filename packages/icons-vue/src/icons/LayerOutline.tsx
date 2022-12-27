// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LayerOutlineSvg from '@ant-design/icons-svg/lib/asn/LayerOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LayerOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LayerOutline: LayerOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayerOutlineSvg}></AntdIcon>;
};

LayerOutline.displayName = 'LayerOutline';
LayerOutline.inheritAttrs = false;
export default LayerOutline;