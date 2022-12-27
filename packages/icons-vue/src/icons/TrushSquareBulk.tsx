// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrushSquareBulkSvg from '@ant-design/icons-svg/lib/asn/TrushSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrushSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrushSquareBulk: TrushSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrushSquareBulkSvg}></AntdIcon>;
};

TrushSquareBulk.displayName = 'TrushSquareBulk';
TrushSquareBulk.inheritAttrs = false;
export default TrushSquareBulk;