// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalSearchBulkSvg from '@ant-design/icons-svg/lib/asn/GlobalSearchBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalSearchBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalSearchBulk: GlobalSearchBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalSearchBulkSvg}></AntdIcon>;
};

GlobalSearchBulk.displayName = 'GlobalSearchBulk';
GlobalSearchBulk.inheritAttrs = false;
export default GlobalSearchBulk;