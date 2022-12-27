// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import BrifecaseCrossBulkSvg from '@ant-design/icons-svg/lib/asn/BrifecaseCrossBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface BrifecaseCrossBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const BrifecaseCrossBulk: BrifecaseCrossBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={BrifecaseCrossBulkSvg}></AntdIcon>;
};

BrifecaseCrossBulk.displayName = 'BrifecaseCrossBulk';
BrifecaseCrossBulk.inheritAttrs = false;
export default BrifecaseCrossBulk;