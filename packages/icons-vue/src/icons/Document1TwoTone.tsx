// GENERATE BY ./scripts/generate.ts
// DON NOT EDIT IT MANUALLY

import { FunctionalComponent } from 'vue';
import Document1TwoToneSvg from '@ant-design/icons-svg/lib/asn/Document1TwoTone';
import AntdIcon, { AntdIconProps } from '../components/AntdIcon';

export interface Document1TwoToneIconType extends FunctionalComponent<AntdIconProps> {
  displayName: string;
}

const Document1TwoTone: Document1TwoToneIconType = (props, context) => {
  const p = { ...props, ...context.attrs };
  return <AntdIcon {...p} icon={Document1TwoToneSvg}></AntdIcon>;
};

Document1TwoTone.displayName = 'Document1TwoTone';
Document1TwoTone.inheritAttrs = false;
export default Document1TwoTone;