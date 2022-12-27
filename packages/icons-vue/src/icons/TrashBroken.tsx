// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrashBrokenSvg from '@ant-design/icons-svg/lib/asn/TrashBroken';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrashBrokenIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrashBroken: TrashBrokenIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrashBrokenSvg}></AntdIcon>;
};

TrashBroken.displayName = 'TrashBroken';
TrashBroken.inheritAttrs = false;
export default TrashBroken;