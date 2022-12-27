// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import ManTwoToneSvg from '@ant-design/icons-svg/lib/asn/ManTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface ManTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const ManTwoTone: ManTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={ManTwoToneSvg}></AntdIcon>;
};

ManTwoTone.displayName = 'ManTwoTone';
ManTwoTone.inheritAttrs = false;
export default ManTwoTone;