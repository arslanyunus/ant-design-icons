// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ShuffleBulkSvg from '@ant-design/icons-svg/lib/asn/ShuffleBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ShuffleBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ShuffleBulk: ShuffleBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ShuffleBulkSvg}></AntdIcon>;
};

ShuffleBulk.displayName = 'ShuffleBulk';
ShuffleBulk.inheritAttrs = false;
export default ShuffleBulk;