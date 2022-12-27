// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignRightBulkSvg from '@ant-design/icons-svg/lib/asn/AlignRightBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignRightBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignRightBulk: AlignRightBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignRightBulkSvg}></AntdIcon>;
};

AlignRightBulk.displayName = 'AlignRightBulk';
AlignRightBulk.inheritAttrs = false;
export default AlignRightBulk;