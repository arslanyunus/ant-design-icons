// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrashOutlineSvg from '@ant-design/icons-svg/lib/asn/TrashOutline';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrashOutlineIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrashOutline: TrashOutlineIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrashOutlineSvg}></AntdIcon>;
};

TrashOutline.displayName = 'TrashOutline';
TrashOutline.inheritAttrs = false;
export default TrashOutline;