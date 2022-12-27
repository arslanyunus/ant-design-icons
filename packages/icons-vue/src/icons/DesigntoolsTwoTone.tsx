// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import DesigntoolsTwoToneSvg from '@ant-design/icons-svg/lib/asn/DesigntoolsTwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface DesigntoolsTwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const DesigntoolsTwoTone: DesigntoolsTwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={DesigntoolsTwoToneSvg}></AntdIcon>;
};

DesigntoolsTwoTone.displayName = 'DesigntoolsTwoTone';
DesigntoolsTwoTone.inheritAttrs = false;
export default DesigntoolsTwoTone;