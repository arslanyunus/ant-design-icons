// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrashBoldSvg from '@ant-design/icons-svg/lib/asn/TrashBold';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrashBoldIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrashBold: TrashBoldIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrashBoldSvg}></AntdIcon>;
};

TrashBold.displayName = 'TrashBold';
TrashBold.inheritAttrs = false;
export default TrashBold;