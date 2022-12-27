// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import EraserBulkSvg from '@ant-design/icons-svg/lib/asn/EraserBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface EraserBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const EraserBulk: EraserBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={EraserBulkSvg}></AntdIcon>;
};

EraserBulk.displayName = 'EraserBulk';
EraserBulk.inheritAttrs = false;
export default EraserBulk;