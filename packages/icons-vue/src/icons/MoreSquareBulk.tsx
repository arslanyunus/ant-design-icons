// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import MoreSquareBulkSvg from '@ant-design/icons-svg/lib/asn/MoreSquareBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface MoreSquareBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const MoreSquareBulk: MoreSquareBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={MoreSquareBulkSvg}></AntdIcon>;
};

MoreSquareBulk.displayName = 'MoreSquareBulk';
MoreSquareBulk.inheritAttrs = false;
export default MoreSquareBulk;