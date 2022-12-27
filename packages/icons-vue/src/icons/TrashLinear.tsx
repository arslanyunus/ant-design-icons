// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrashLinearSvg from '@ant-design/icons-svg/lib/asn/TrashLinear';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrashLinearIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrashLinear: TrashLinearIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrashLinearSvg}></AntdIcon>;
};

TrashLinear.displayName = 'TrashLinear';
TrashLinear.inheritAttrs = false;
export default TrashLinear;