// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignBottomBulkSvg from '@ant-design/icons-svg/lib/asn/AlignBottomBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignBottomBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignBottomBulk: AlignBottomBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignBottomBulkSvg}></AntdIcon>;
};

AlignBottomBulk.displayName = 'AlignBottomBulk';
AlignBottomBulk.inheritAttrs = false;
export default AlignBottomBulk;