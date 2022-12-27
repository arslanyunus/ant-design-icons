// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import AlignVerticallyBulkSvg from '@ant-design/icons-svg/lib/asn/AlignVerticallyBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface AlignVerticallyBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const AlignVerticallyBulk: AlignVerticallyBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={AlignVerticallyBulkSvg}></AntdIcon>;
};

AlignVerticallyBulk.displayName = 'AlignVerticallyBulk';
AlignVerticallyBulk.inheritAttrs = false;
export default AlignVerticallyBulk;