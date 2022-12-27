// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalBulkSvg from '@ant-design/icons-svg/lib/asn/GlobalBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalBulk: GlobalBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalBulkSvg}></AntdIcon>;
};

GlobalBulk.displayName = 'GlobalBulk';
GlobalBulk.inheritAttrs = false;
export default GlobalBulk;