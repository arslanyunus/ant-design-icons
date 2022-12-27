// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Battery3FullBulkSvg from '@ant-design/icons-svg/lib/asn/Battery3FullBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Battery3FullBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Battery3FullBulk: Battery3FullBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Battery3FullBulkSvg}></AntdIcon>;
};

Battery3FullBulk.displayName = 'Battery3FullBulk';
Battery3FullBulk.inheritAttrs = false;
export default Battery3FullBulk;