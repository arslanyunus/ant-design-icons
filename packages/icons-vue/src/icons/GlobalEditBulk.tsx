// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalEditBulkSvg from '@ant-design/icons-svg/lib/asn/GlobalEditBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalEditBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalEditBulk: GlobalEditBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalEditBulkSvg}></AntdIcon>;
};

GlobalEditBulk.displayName = 'GlobalEditBulk';
GlobalEditBulk.inheritAttrs = false;
export default GlobalEditBulk;