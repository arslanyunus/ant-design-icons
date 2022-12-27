// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrashBulkSvg from '@ant-design/icons-svg/lib/asn/TrashBulk';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrashBulkIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrashBulk: TrashBulkIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrashBulkSvg}></AntdIcon>;
};

TrashBulk.displayName = 'TrashBulk';
TrashBulk.inheritAttrs = false;
export default TrashBulk;