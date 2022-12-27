// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import LayerBulkSvg from '@ant-design/icons-svg/lib/asn/LayerBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface LayerBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const LayerBulk: LayerBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={LayerBulkSvg}></AntdIcon>;
};

LayerBulk.displayName = 'LayerBulk';
LayerBulk.inheritAttrs = false;
export default LayerBulk;