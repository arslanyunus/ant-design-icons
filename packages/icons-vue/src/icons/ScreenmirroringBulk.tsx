// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ScreenmirroringBulkSvg from '@ant-design/icons-svg/lib/asn/ScreenmirroringBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ScreenmirroringBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ScreenmirroringBulk: ScreenmirroringBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ScreenmirroringBulkSvg}></AntdIcon>;
};

ScreenmirroringBulk.displayName = 'ScreenmirroringBulk';
ScreenmirroringBulk.inheritAttrs = false;
export default ScreenmirroringBulk;