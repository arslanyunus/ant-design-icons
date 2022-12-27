// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import TrashTwoToneSvg from '@ant-design/icons-svg/lib/asn/TrashTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface TrashTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const TrashTwoTone: TrashTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={TrashTwoToneSvg}></AntdIcon>;
};

TrashTwoTone.displayName = 'TrashTwoTone';
TrashTwoTone.inheritAttrs = false;
export default TrashTwoTone;