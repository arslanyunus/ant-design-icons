// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import UnlimitedBulkSvg from '@ant-design/icons-svg/lib/asn/UnlimitedBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface UnlimitedBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const UnlimitedBulk: UnlimitedBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={UnlimitedBulkSvg}></AntdIcon>;
};

UnlimitedBulk.displayName = 'UnlimitedBulk';
UnlimitedBulk.inheritAttrs = false;
export default UnlimitedBulk;