// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import GlobalRefreshBulkSvg from '@ant-design/icons-svg/lib/asn/GlobalRefreshBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface GlobalRefreshBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const GlobalRefreshBulk: GlobalRefreshBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={GlobalRefreshBulkSvg}></AntdIcon>;
};

GlobalRefreshBulk.displayName = 'GlobalRefreshBulk';
GlobalRefreshBulk.inheritAttrs = false;
export default GlobalRefreshBulk;