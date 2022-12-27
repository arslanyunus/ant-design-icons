// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DirectLeftBulkSvg from '@ant-design/icons-svg/lib/asn/DirectLeftBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DirectLeftBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DirectLeftBulk: DirectLeftBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DirectLeftBulkSvg}></AntdIcon>;
};

DirectLeftBulk.displayName = 'DirectLeftBulk';
DirectLeftBulk.inheritAttrs = false;
export default DirectLeftBulk;