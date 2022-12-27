// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignHorizontallyBulkSvg from '@ant-design/icons-svg/lib/asn/AlignHorizontallyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignHorizontallyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignHorizontallyBulk: AlignHorizontallyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignHorizontallyBulkSvg}></AntdIcon>;
};

AlignHorizontallyBulk.displayName = 'AlignHorizontallyBulk';
AlignHorizontallyBulk.inheritAttrs = false;
export default AlignHorizontallyBulk;